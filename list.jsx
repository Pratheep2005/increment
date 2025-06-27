export default function List(){
    const fruits=[
        {id:1,name:"apple",calories:95},
        {id:2,name:"Orange",calories:89},
        {id:3,name:"Banana" ,calories:52},
        {id:4,name:"Coconut",calories:45},
        {id:5,name:'pineapple',calories:38}];
    fruits.sort((a,b) => a.calories-a.calories);
    const listItems=fruits.map(fruit => <li key={fruit.id}>{fruit.name}:&nbsp;<b>{fruit.calories}</b></li>)
    return(<ol>{listItems}</ol>)
}
