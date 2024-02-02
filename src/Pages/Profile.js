import Searchbar from './Searchbar';
import ArticleComponents from './ArticleComponents';

const Profile = () => {
    return ( 
    <div>
        <div style={{ height: '100vh', position: 'relative' ,zIndex:'1'}}> 
            <div className="text-center bg-myBlue"  style={{ width:'100%' , height: '47%', position:'absolute',top:'0px',zIndex:'2'}}>
            <p className="text-darkBlue font-bold mt-12">Welcome</p>
            <p className="text-darkBlue font-bold">NOM Prenom</p>
            <p className="text-darkBlue font-bold mt-16">Are you looking for a specific</p>
            <p className="text-darkBlue font-bold">scientific article ?</p>
            </div>
            <div style={{width:'100%',position:'absolute' ,marginTop:'256px',zIndex:'3'}}>
                <Searchbar/>
            </div>
            <div className="h-12"style={{width:'100%',position:'absolute',zIndex:'2',}} >
        </div>
            <div className="border-2 rounded-2xl text-left mx-auto max-w-[250px] 
        sm:max-w-[280px] md:max-w-xl xl:max-w-2xl" 
        style={{width:'700px',borderColor:'#D4F2F4',padding:'20px',left: '50%',zIndex:'3',
        transform: 'translate(-50%, -50%)',position:'absolute',top:'460px',maxHeight: '200px', overflowY: 'auto',
        WebkitOverflowScrolling: 'touch', 
            
            scrollbarWidth: 'thin', // Firefox
            scrollbarColor: '#D4F2F4 #E5E7EB', // Firefox
            '&::-webkit-scrollbar': {
              width: '12px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#E5E7EB',
            },
            
        }}>
            <p className="text-darkBlue font-bold">Recent articles</p>
            <ArticleComponents/> 
            <ArticleComponents/> 
            <ArticleComponents/> 
            <ArticleComponents/> 
            <ArticleComponents/> 
            <ArticleComponents/> 
            <ArticleComponents/> 
            <ArticleComponents/> 
            <ArticleComponents/> 
            <ArticleComponents/> 
            <ArticleComponents/> 
            <ArticleComponents/> 
          
        </div>
        </div>
        <div className="h-12">
        </div>
        </div>
    );
}
 
export default Profile;