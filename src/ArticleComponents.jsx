const ArticleComponents = () => {
    const Titre = "Les chemins qui montent "
    const Auteur = ["B.Oussama","D.Mohammed","N.Walid"]
    const date = "03/12/2024"
    const nbJaime = 234
    return (  
        <div className="bg-gradient-to-b from-myBlue via-myBlue to-white mx-auto max-w-[250px] 
        sm:max-w-[300px] md:max-w-xl xl:max-w-2xl px-4 pb-1 pt-1 flex justify-between rounded 
        border-1-solid-darkBlue mt-10">
            <div className="flex-col text-darkBlue flex items-start justify-start">
                 {/* this div will contain the title and the date of the article  */}
                <div>
                    <p className="font-bold">{Titre} (By : {Auteur[0]} )</p>
                </div>
                <div>Date {date}</div>
            </div>
            <div className="flex-col  items-center justify-center">
                {/* this div will containe the icon and the number of likes  */}
             <button>
             <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="text-darkBlue w-6 h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
             </button>
                <div className="text-darkBlue">{nbJaime}</div>
            </div>

        </div>
    );
}
 
export default ArticleComponents;