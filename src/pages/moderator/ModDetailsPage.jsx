import React from 'react';
import AuthorsList from './AuthorsList';
import Navbar from '../../components/NavBar/Navbar';

 // dans cette page on va utiliser le ID pour

const ModDetailsPage = () => {
  // Example data from the backend
  const authorsData = [
    { name: 'Author 1', speciality: 'Speciality 1', mail: 'author1@example.com' },
    { name: 'Author 2', speciality: 'Speciality 2', mail: 'author2@example.com' },
    { name: 'Author 3', speciality: 'Speciality 3', mail: 'author3@example.com' },
    { name: 'Author 3', speciality: 'Speciality 3', mail: 'author3@example.com' },
    // Add more authors as needed
  ];

  return (
<div >
<Navbar/>
 <div className='flex flex-col px-4 py-4'>
  <div >
<b className='text-darkBlue font-bold p-4'> Title :</b> 
<div className=' flex1 border border-2 border-darkBlue   mx-auto max-w-screen sm:max-w-[98%] md:max-w-[95%] xl:max-w-[80%] px-4 pb-1 pt-1  flex justify-between rounded-md items-center'> 
<p > Titre de l article 
</p>
 </div>
 </div>

    <div>
      <b className='text-darkBlue font-bold '>Authors :</b> <AuthorsList authorsData={authorsData} />
    </div>
    <div> 
    <b className='text-darkBlue font-bold'>Abstract :</b>
    <p className='flex items-center justify-center'> The main addition that this paper makes to the previous version is to note a poten-tially key contribution that Empirical Methods could make to these understandings.</p>
    </div>
    <div> 
    <b className='text-darkBlue font-bold'>Article :</b>
    <p className='flex items-center justify-center'>That being the case, Empirical Methods research should be viewed as being essential to gaining knowledge and establishing the science of the nature of software, in that it addresses issues of how to measure various aspects of software.
This paper focuses as a[1] case in point on how to deﬁne one particular basic measure of software, namely its size. This would seem to be a basic measure and yet we note that no such satisfactory measure of software size seems to exist. Grappling with this and related questions has been a focus of the Empirical Methods community. The community’s success in understanding how to establish such measures of.
computer software is[2]. clearly important to progress in being more effective in computer software engineering, but might indeed[3] also have important ramiﬁcations That being the case, Empirical Methods research should be viewed as being essential to gaining knowledge and establishing the science of the nature of software, in that it addresses issues of how to measure various aspects of software. This paper focuses as a case[4] in point on how to deﬁne one particular basic measure of software, namely its size. This would seem to be a basic measure and yet we note that no such satisfactory measure of software size seems to exist. Grappling with this and related questions has been a focus of the Empirical Methods community. The community’s success in understanding how to establish such measures of computer software is clearly important to progress in being more effective in computer software engineering, but might indeed also have important ramiﬁcations </p>
    </div>
    <div> 
    <b className='text-darkBlue font-bold'>KeyWords :</b>
    <p className='flex items-center justify-center'> jqkdb,zbdk,zhlh,kznl</p>
    </div>
    <div> 
    <b className='text-darkBlue font-bold'>References :</b>
    <ol >
        <li>hjqbxkq </li>
        <li>nhjqbk </li>
    </ol>
    </div>
    <div> 
    <b className='text-darkBlue font-bold'>Link To Pdf :</b>
    <div className=' border border-2 border-darkBlue   mx-auto max-w-screen sm:max-w-[98%] md:max-w-[95%] xl:max-w-[80%] px-4 pb-1 pt-1  flex justify-between rounded-md flex-col items-center '>
    <a    href="https://www.example.com" target="_blank" rel="noopener noreferrer">
    https://www.example.com
    </a>
    </div>
    </div>
    <div className='flex justify-center pt-6 pb-6 space-x-4'>
  <button className=' bg-white border border-2 border-green-500 rounded-md p-3 flex justify-between flex-col items-center'>
    <p className='text-green-500 font-semibold text-lg'>Validate</p>
  </button>

  <button className=' bg-white border border-2 border-darkBlue rounded-md p-3 flex justify-between flex-col items-center'>
    <p className='text-darkBlue font-semibold text-lg'>Save</p>
  </button>

  <button className=' bg-white border border-2 border-red-500 rounded-md p-3 flex justify-between flex-col items-center'>
    <p className='text-red-500 font-semibold text-lg'>Delete</p>
  </button>
</div>

    </div>
    </div>
    
    
  );
}

export default ModDetailsPage;
