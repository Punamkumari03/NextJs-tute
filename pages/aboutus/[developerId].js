import { useRouter } from "next/router";
//our-domain.com/aboutus/developer
 const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
  
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
  
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
function DeveloperPage(){
    const router = useRouter();
    const developerId = router.query.developerId;
    const userDetail = details.find((detail) => detail.id === Number(developerId));

    if (!userDetail) {
        return <div>Developer doesn't exist</div>;
      }
    return <div>
       <h1>User Details</h1> 
      
       <p>Name:{userDetail.name}</p>
       <p>Role:{userDetail.role}</p>
    </div>
}

export default DeveloperPage;