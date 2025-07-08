import './UserCard.css';
function UserCard({name, age, add}) 
{
    const cardClass = age>18? 'adult-card' : 'not-adult-card';
    return (
        <>
        <div className={cardClass}>
        <div>name is :{name}</div>
        <div>age is : {age}</div>
        <div>Address is : {add}</div>

        </div>
        
        </>
    
    )
}
export default UserCard;