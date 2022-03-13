// 1

let user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
   studentstatus: 'active'
}
   
   console.log  (user.studentstatus)
   
// 2
let mas = [ 3, 7, 11, 13, 15, 17]
for (let item of mas){
    console.log (item);
}

// 3
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 80] 
for ( let i=0; i < numbers.length; i++ ) 
  if (numbers[i]>5) {
      console.log(numbers[i]);
  }


// 4
  let user3 = {
	name: 'giorgi',
	age:  20,
	studentstatus: 'active'}
    if (user3['age'] >18 && user3['studentstatus'] == 'active')
    {
        console.log ('hello')
    }  else if (user3['name'] == 'giorgi')
    {
        console.log ('hello giorgi')
    }   else if (user3['studentstatus'] == 'active' || user3['age'] < 25)
    {
      console.log ('hello world')
    } else {
        console.log ('error')
    }

// 5
let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ] ;

for ( let i of array)
if (typeof i == 'string') {
    console.log(i);
} 


// let masive = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas'] ;
// {
//     console.log(masive[1]);
// }  აქ თუ შემიძლია წამოვიღო კიდევ სამი მძიმით ვერ ჩამოვთვალე და ცალკე [] გაწერაც არასწორია მგონი

// 6
let users = [
    {username:'test1',status:false},
    {username:'test2',status:false},
    {username:'test3',status:true}
];
for (let x of users)
if (x.status != false)
{
    console.log(x);
}

// სინტაქს ვერ შევეჩვიე ჯერ
// უფრო სწორად პირველად დავწერე ჯავას დავალება და მივხვდი html-ის სინტაქსი როგორ გამიჯდა თურმე