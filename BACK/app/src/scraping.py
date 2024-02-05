import os
import re
import fitz
import requests
from datetime import datetime
import json
from pdfminer.high_level import extract_text
from io import BytesIO
from src import models, schemas
from src.api.endpoints import items

def parse_json_string(json_str):
    try:
        # Attempt to load the JSON string
        data = json.loads(json_str)
        
        # Return the parsed data
        return True, data
    except json.JSONDecodeError:
        # Handle the case where the string is not valid JSON
        return False, None

def extract_doc_from_pdf_url(pdf_url):
    doc = None
    try:
        # Download the PDF content from the URL
        response = requests.get(pdf_url)
        response.raise_for_status()  # Raise an exception for HTTP errors
        pdf_content = response.content

        # Open the PDF from the downloaded content
        doc = fitz.open("pdf", pdf_content)

    except requests.exceptions.RequestException as e:
        print(f"Error downloading PDF from URL: {e}")
    except Exception as e:
        print(f"Error extracting text: {e}")


    return doc

def get_source_id(pdf_url):
    headers = {
    'x-api-key': 'sec_xQK7iIGc7bS7uU4NHhvgzwG8OOb9zscJ',
    'Content-Type': 'application/json'
    }

    data = {'url': pdf_url}

    response = requests.post(
        'https://api.chatpdf.com/v1/sources/add-url', headers=headers, json=data)

    if response.status_code != 200:
        print('Status:', response.status_code)
        print('Error:', response.text)

    source_id =  response.json()['sourceId']
    Return = []
    Return.append(source_id)
    Return.append(headers)

    return Return   # retourne headers and source id

def scraping_by_champ(question,source_id,headers):
    data = {
        'sourceId': source_id,
        'messages': [
            {
                'role': "user",
                'content':question
            },
        ]
    }
    response = requests.post(
        'https://api.chatpdf.com/v1/chats/message', headers=headers, json=data)


    if response.status_code == 200:
        is_valid = parse_json_string(response.json()['content'])
        if is_valid :
            print('Result:', response.json()['content'])
        else:
            print("Nothing")
        return response.json()['content']

    else:
        print('Status:', response.status_code)
        print('Error:', response.text)
        return 0

def find_original_word_and_match(words, text):
    for word in words:
        if word.lower() in text.lower():
            index = text.lower().find(word.lower())
            matched_substring = text[index:index + len(word)]
            return matched_substring 
    
    return None 

def extract_champ_keyWords(doc):
    '''
    keyWords = ["keyWords","Key words","Keywords-Sequentia","Keywords—","Keywords:","Keywords:","Keywords ","Index Terms"]
    critair_arret =["ACM Reference Format:"]
    page = doc[0]
    text = page.get_text()
    debut = find_original_word_and_match(keyWords,text)
    index_debut = text.find(debut)
    resultat = ''
    if (debut != None):
        if (find_original_word_and_match(critair_arret,text)== None):
            critair_arret =["Abstract"]
            fin = find_original_word_and_match(critair_arret,text)
            index_fin = text.find(fin)   
            if (index_debut > index_fin):
                critair_arret =["INTRODUCTION"]
 
        fin = find_original_word_and_match(critair_arret,text)
        if fin==None : 
                resultat = text[index_debut:]
                page =doc[1]
                text = page.get_text()
        if (find_original_word_and_match(critair_arret,text)!= None):
            fin = find_original_word_and_match(critair_arret,text)
            index_fin = text.find(fin)
            resultat = resultat + text[:index_fin]
            resultat =resultat.replace("\n"," ")
            print("==="+resultat)
            return resultat
        else:
            print("find nothing")
            return None
    else:
        print("No words from the list were found in the text.")
        return None 
    '''
    keyWords = ["keyWords","Key words","Keywords-Sequentia","Keywords—","Keywords:","Keywords:","Keywords ","Index Terms"]
    critair_arret =["ACM Reference Format:"]
    text = doc[0].get_text() 
    debut = find_original_word_and_match(keyWords,text)
    index_debut = text.find(debut)

    if (debut != None):
        if (find_original_word_and_match(critair_arret,text)== None):
            critair_arret =["Abstract"]
            fin = find_original_word_and_match(critair_arret,text)
            index_fin = text.find(fin)   
            if (index_debut > index_fin):
                critair_arret =["INTRODUCTION"]
 
        if (find_original_word_and_match(critair_arret,text)!= None):
            fin = find_original_word_and_match(critair_arret,text)
            index_fin = text.find(fin)
            resultat = text[index_debut:index_fin]
            resultat =resultat.replace("\n"," ")
            return resultat
        else:
            print("find nothing")
            return None
    else:
        print("No words from the list were found in the text.")
        return None   

def extract_champ_Abstract(doc):
    abstract =["abstract","summary","résumé","abstracts"]
    critair_arrret =["keyWords","Key words","Keywords-Sequentia","Keywords—","Keywords:","Keywords ","Index Terms","CCS CONCEPTS","Categories and Subject Descriptors","Introduction"]
    text = doc[0].get_text()
    if (find_original_word_and_match(abstract,text)!= None):
        if (find_original_word_and_match(critair_arrret,text)!= None):
            debut = find_original_word_and_match(abstract,text)
            index_debut = text.find(debut)
            fin = find_original_word_and_match(critair_arrret,text)
            index_fin = text.find(fin)
            resultat = text[index_debut:index_fin]
            resultat =resultat.replace("\n"," ")
            if (index_debut > index_fin):
                return "abstract apres keywords" 
            return resultat
        else:
            print("find nothing")
            return None
    else:
        print("No words from the list were found in the text.")
        return None

def extract_champ_refernce(text):
    reference =["REFERENCES"]
    critaire_arret =["SURVEY INSTRUMENTS"]
    debut = find_original_word_and_match(reference,text)
    print(debut)
    index_debut = text.find(debut)
    if (debut!=None):
        fin = find_original_word_and_match(critaire_arret,text)
        if (fin == None):    
            resultat = text[index_debut:]
        else:
            index_fin = text.find(fin)
            resultat = text[index_debut:index_fin]  
        return resultat  
    else:
        print("No words from the list were found in the text.")
        return None 

def extract_text_without_table_from_url(text ,pdf_url, page_number):

    response = requests.get(pdf_url)
    response.raise_for_status()  # Check for HTTP errors
    pdf_content = response.content
    response = ''
    # Use BytesIO to create a file-like object from the PDF content
    pdf_file = BytesIO(pdf_content)
    # Extract text from the specified page
    page_text = extract_text(pdf_file, page_numbers=[page_number])  # Note: page_numbers is 1-based
        # Split the text into words
    words = page_text.split()
        # Extract the last 10 words
    last_words = ' '.join(words[-5:])
    #print("========================================="+last_words)
    result = ""
    for word in text.split():
        result += word + " "
        if last_words.lower() in result.lower():
            break
    #print("=========="+result.strip())
    response = response + result.strip()
        
    return response

def extract_text_perfect(doc,pdf_url): # without images and tables 
    all_text = ""
    for page_num in range(doc.page_count):
        page = doc[page_num]
        text = page.get_text()
        all_text = all_text + extract_text_without_table_from_url(text,pdf_url,page_num)

    return all_text

def extract_champ_textIntegral(text):
    critaire_arret =["REFERENCES",]
    critair_debut =["introduction"]
    debut = find_original_word_and_match(critair_debut,text)
    index_debut = text.find(debut)
    if (debut!=None):
        fin = find_original_word_and_match(critaire_arret,text)
        if (fin == None):    
            resultat = text[index_debut:]
        else:
            index_fin = text.find(fin)
            resultat = text[index_debut:index_fin]  
        return resultat  
    else:
        print("No words from the list were found in the text.")
        return None

def merge_json_file (title,author,institution,abstract,keywords,refernce,text):
    # Parse JSON data into dictionaries
    dict_1 = json.loads(title)
    dict_2 = json.loads(author)
    dict_3 = json.loads(institution)
    dict_4 = json.loads(abstract)
    dict_5 = json.loads(keywords)
    dict_6 = json.loads(refernce)
    dict_7 = json.loads(text)

    # Merge dictionaries
    merged_dict = {}
    merged_dict.update(dict_1)
    merged_dict.update(dict_2)
    merged_dict.update(dict_3)
    merged_dict.update(dict_4)
    merged_dict.update(dict_5)
    merged_dict.update(dict_6)
    merged_dict.update(dict_7)

    # Convert the merged dictionary back to JSON
    merged_json = json.dumps(merged_dict, indent=2)

    json_file_path = "Scientific-Articles-Search-Web-App\app\src\article.json"
    
    # Write the merged dictionary to a JSON file
    with open(json_file_path, 'w', encoding='utf-8') as output_file:
        json.dump(merged_dict, output_file, indent=2)




def scrap_function(pdf_url):
    doc = extract_doc_from_pdf_url(pdf_url)
    all_text = ""
    for page_num in range(doc.page_count):
        page = doc[page_num]
        text = page.get_text()
        all_text += text
    
    text = extract_text_perfect(doc,pdf_url)
    
    
    items = get_source_id(pdf_url)  # headers and source_id
        # extract the title of the pdf 
    question_title = "what is the title ,give it to me in format json ?"
    title = scraping_by_champ(question_title,items[0],items[1])
        # extract the author of the text 
    question_author = "who are the authors ,give it to me in format JSON ? "
    author = scraping_by_champ(question_author,items[0],items[1])
        # extract the institution of each author in the text 
    question_author = "what is the institution of each author,give it to me in format JSON ? "
    institution = scraping_by_champ(question_author,items[0],items[1])
    string_json = {"Institution":institution}
    institution_json_data = json.dumps(string_json)   
        # extract KeyWords 
    Keywords = extract_champ_keyWords(doc)
    string_json = {"Keywords":Keywords}
    Keywords_json_data = json.dumps(string_json)
    print("=========================")
    #print(Keywords_json_data)

        # extract Abstract 
    Abstract = extract_champ_Abstract(doc)
    string_json = {"Abstract" : Abstract}
    Abstract_json_data = json.dumps(string_json)
    print("=========================")
    #print(Abstract_json_data)

        # extract Reference 
    Reference = extract_champ_refernce(all_text)
    string_json = {"Reference":Reference}
    Refernce_json_data = json.dumps(string_json)
    print("=========================")
    #print(Refernce_json_data)
            # extract Text integral
    Text_integral = extract_champ_textIntegral(all_text)
    string_json = {"Text_integral":Text_integral}
    Text_json_data = json.dumps(string_json)
    #print("=========================")
    #print(Text_json_data)
    
    merge_json_file(title,author,institution_json_data,Abstract_json_data,Keywords_json_data,Refernce_json_data,Text_json_data)
    items =[]
    items.append(title)
    items.append(author)
    items.append(institution_json_data)
    items.append(Keywords)
    items.append(Abstract)
    items.append(Reference)
    items.append(Text_integral)

    return items

pdf_url1 = 'http://www.philippe-fournier-viger.com/survey_sequential_pattern_mining.pdf'
pdf_url2 = 'http://www.philippe-fournier-viger.com/2019_TKDE_Average_utility.pdf'

#scrap_function(pdf_url2)
