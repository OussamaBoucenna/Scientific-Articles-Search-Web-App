const ArticleDetails = () => {
    const handleClick = () => {
        console.log('Button clicked!')
    }
    const shadowStyle = {
        boxShadow: '5px 5px 20px 0px #04445F, -5px -5px 20px 0px #D4F2F4'
      };
    
    return (  
        <div className="p-4">
        <div className="h-2"></div>
        <button onClick={handleClick} className="border border-1-solid-darkBlue rounded flex items-center block ml-auto mr-auto md:ml-auto md:mr-2">
        <p className="ml-1">Add to favorites list</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#04445F" className="w-8 h-8 p-1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
        </button>
        <div className="text-center mt-10">
            <p className="text-darkBlue font-bold text-2xl">What is software ?</p>
        </div>
        <div className="text-center md:grid md:grid-cols-3 md:gap-4 mt-10">
        <p className="mt-10">
        <span className="font-bold">Walid NEHARI</span><br></br>1CS ESI Student<br></br>SIL Department CSE 2023<br></br>
            <a style={{color:'#0096c7' , textDecoration:'underline'}}
            href="https://www.esi.dz/">kw_nehari@esi.dz</a>
        </p>
        <p className="mt-10">
        <span className="font-bold">Oumayma KABA</span><br></br>1CS ESI Student<br></br>SIL Department CSE 2023<br></br>
            <a style={{color:'#0096c7' , textDecoration:'underline'}}
            href="https://www.esi.dz/">lo_kaba@esi.dz</a>
        </p>
        <p className="mt-10">
        <span className="font-bold">Oussama BOUCENNA</span><br></br>1CS ESI Student<br></br>SIL Department CSE 2023<br></br>
            <a style={{color:'#0096c7' , textDecoration:'underline'}}
            href="https://www.esi.dz/">lo_boucenna@esi.dz</a>
        </p>
        </div>
        <div className="md:grid md:grid-cols-5 md:gap-4 mt-20">
            <div className="block mr-auto ml-auto col-span-2">
                <h2 className="text-darkBlue text-lg font-bold">Abstract</h2>
               
                <div className="mt-3 p-4 rounded mr-3 font-bold text-center" style={shadowStyle}>
                    <p>The main addition that this paper makes to the previous
                        version is to note a poten-tially key contribution that Empirical
                        Methods could make to these understandings.
                    key contribution that Empirical Methods could make to
                    these understandings.
                    </p>
                </div>
            </div>
            <div className="col-span-3">
                <p className="mt-10 md:mt-0 text-left text-md md:text-lg">
                <span style={{fontWeight:'900',fontSize:'xx-large'}}>T</span>hat being the case, Empirical Methods research should be viewed as being essential to 
                gaining knowledge and establishing the science of the nature of software, in that it addresses 
                issues of how to measure various aspects of software.
                This paper focuses as a[1] case in point on how to deﬁne one particular
                basic measure of software, namely its size. This would seem to be a basic measure
                and yet we note that no such satisfactory measure of software size seems to exist.
                Grappling with this and related questions has been a focus of the Empirical Methods community.
                The community’s success in understanding how to establish such measures. 
                </p>
            </div>
            <div className="col-span-5">
                <p className="text-left">
                computer software is[2]. clearly important to progress in being more effective in
                computer software engineering, but might indeed[3] also have important ramiﬁcations
                That being the case, Empirical Methods research should be viewed as being essential
                to gaining knowledge and establishing the science of the nature of software, in that
                it addresses issues of how to measure various aspects of software. This paper focuses as
                a case[4] in point on how to deﬁne one particular basic measure of software, namely its size.
                This would seem to be a basic measure and yet we note that no such satisfactory measure of
                software size seems to exist. Grappling with this and related questions has been a focus of
                the Empirical Methods community. The community’s success in understanding how to establish
                such measures of computer software is clearly important to progress in being more effective
                in computer software engineering, but might indeed also have important ramiﬁcations 
                That being the case, Empirical Methods research should be viewed as being essential to 
                gaining knowledge and establishing the science of the nature of software, in that it addresses 
                issues of how to measure various aspects of software.
                This paper focuses as a[1] case in point on how to deﬁne one particular
                basic measure of software, namely its size. This would seem to be a basic measure
                and yet we note that no such satisfactory measure of software size seems to exist.
                Grappling with this and related questions has been a focus of the Empirical Methods community.
                The community’s success in understanding how to establish such measures of.
                computer software is[2]. clearly important to progress in being more effective in
                computer software engineering, but might indeed[3] also have important ramiﬁcations
                That being the case, Empirical Methods research should be viewed as being essential
                to gaining knowledge and establishing the science of the nature of software, in that
                it addresses issues of how to measure various aspects of software. This paper focuses as
                a case[4] in point on how to deﬁne one particular basic measure of software, namely its size.
                This would seem to be a basic measure and yet we note that no such satisfactory measure of
                software size seems to exist. Grappling with this and related questions has been a focus of
                the Empirical Methods community. The community’s success in understanding how to establish
                such measures of computer software is clearly important to progress in being more effective
                in computer software engineering, but might indeed also have important ramiﬁcations 
                That being the case, Empirical Methods research should be viewed as being essential to 
                gaining knowledge and establishing the science of the nature of software, in that it addresses 
                issues of how to measure various aspects of software.
                This paper focuses as a[1] case in point on how to deﬁne one particular
                basic measure of software, namely its size. This would seem to be a basic measure
                and yet we note that no such satisfactory measure of software size seems to exist.
                Grappling with this and related questions has been a focus of the Empirical Methods community.
                The community’s success in understanding how to establish such measures of.
                computer software is[2]. clearly important to progress in being more effective in
                computer software engineering, but might indeed[3] also have important ramiﬁcations
                That being the case, Empirical Methods research should be viewed as being essential
                to gaining knowledge and establishing the science of the nature of software, in that
                it addresses issues of how to measure various aspects of software. This paper focuses as
                a case[4] in point on how to deﬁne one particular basic measure of software, namely its size.
                This would seem to be a basic measure and yet we note that no such satisfactory measure of
                software size seems to exist. Grappling with this and related questions has been a focus of
                the Empirical Methods community. The community’s success in understanding how to establish
                such measures of computer software is clearly important to progress in being more effective
                in computer software engineering, but might indeed also have important ramiﬁcations.
                </p>
            </div>
        </div>
        <div className="text-left p-2 block mr-auto md:w-96 mt-10">
            <p className="text-darkBlue text-md font-bold md:text-lg uppercase">Keywords</p>
            <p className="text-sm md:text-md mt-1 sm:max-w-[220px] md:max-w-xl xl:max-w-2xl">Agile Development, Scrum, Waterfall Model,<br></br>DevOps</p>
        </div>
        <hr className="block mr-auto ml-auto max-w-[160px] sm:max-w-[220px] md:max-w-xl xl:max-w-2xl mt-5" style={{borderColor:'#04445F'}} />
        <div className="text-left p-2 block mr-auto md:w-120 mt-10">
            <p className="text-darkBlue text-md font-bold md:text-lg uppercase">references</p>
            <p className="text-sm md:text-md mt-1 sm:max-w-[220px] md:max-w-xl xl:max-w-2xl">[1] Daniel Kahneman. (2011). "Thinking, Fast and Slow." Farrar, Straus and Giroux.<br></br></p>
            <p className="text-sm md:text-md mt-1 sm:max-w-[220px] md:max-w-xl xl:max-w-2xl">[2] Watson JD, Crick FH. (1953). "Molecular Structure of Nucleic Acids: A Structure for Deoxyribose Nucleic Acid." Nature, 171, 737-738.<br></br></p>
            <p className="text-sm md:text-md mt-1 sm:max-w-[220px] md:max-w-xl xl:max-w-2xl">[3] David W. Keith et al. (2018). "A Process for Capturing CO2 from the Atmosphere." Joule, 2(8), 1573-1594.<br></br></p>
            <p className="text-sm md:text-md mt-1 sm:max-w-[220px] md:max-w-xl xl:max-w-2xl">[4] Erving Goffman. (1967). "The Presentation of Self in Everyday Life." In "Interaction Ritual: Essays on Face-to-Face Behavior," Anchor Books.<br></br></p>
        </div>
        <hr className="block mr-auto ml-auto max-w-[160px] sm:max-w-[220px] md:max-w-xl xl:max-w-2xl mt-5" style={{borderColor:'#04445F'}} />
        <div className="text-center mt-20 mb-20">
            <p className="text-darkBlue text-md font-bold md:text-lg p-2">Hit the link to get the article in PDF</p>
            <a style={{color:'#0096c7' , textDecoration:'underline'}}
            href="https://www.africau.edu/images/default/sample.pdf">Check it Here</a>
        </div>
        </div>
    );
}
 
export default ArticleDetails;