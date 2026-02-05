type ProfileProps = {
    name: string;
    age: number;
}

const Profile = ({ name, age }: ProfileProps) => {
 return(
    <>
        <h2>Name:{name}</h2>
        <p>Age:{age}</p>
    </>
 )
}

export default Profile;