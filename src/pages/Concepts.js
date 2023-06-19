import React from "react";
import "../styles/concepts.css";
import doc from "../images/doc.png"
import recur from "../images/recur.gif"
import c from "../images/class.png"
import inheritance from "../images/inheritance.png"
import fread from "../images/freading.png"
import fwrite from "../images/fwriting.png"
import uml from "../images/uml.png"
import sort from "../images/sorting.png"
import search from "../images/searching.png"
import { useState } from "react";
import Overlay from "../components/overlay";

import one from "../images/concepts/Documentation.png"
import two from "../images/concepts/Recursion.png"
import three from "../images/concepts/Classes.png"
import four from "../images/concepts/Inheritance.png"
import five from "../images/concepts/Reading.png"
import six from "../images/concepts/Writing.png"
import seven from "../images/concepts/UML.png"

const Concepts = () => {

    const [isDoc, setIsDoc] = useState(false);
    const [isRecur, setIsRecur] = useState(false);
    const [isClass, setIsClass] = useState(false);

    const [isInherit, setIsInherit] = useState(false);
    const [isWrite, setIsWrite] = useState(false);
    const [isRead, setIsRead] = useState(false);

    const [isUML, setIsUML] = useState(false);
    const [isSort, setIsSort] = useState(false);
    const [isSearch, setIsSearch] = useState(false);

    return (
    <div>
        <div className="title"> Programming Concepts: </div>
        <div className="grid-container">
            <div className="col">
                <button className="button-57" onClick={ () => setIsDoc(!isDoc)}><span className="doc">
                    <div className="text">Documentation</div>
                    <img src={doc} alt = "" className="documentation"></img>
                    </span>
                    <span>Documentation provides information to users about how the program functions.<br></br><br></br><br></br> Click to learn more!</span>
                </button>
                <Overlay isOpen={isDoc} onClose={()=>setIsDoc(!isDoc)}>
                    <div className="header">Documentation:</div>
                    <div className="body">
                        <img src={one} alt = "" className="code_ex"></img>
                        <div className="explanation">Documentation gives other users or programmers an understanding of what the code is doing and how it works. Programming is often a team effort and if others cannot understand what your program does, then it is hard for others to help when issues arise. The image on the left displays an example of documentation for a class. We first give a brief description of what the class does and how it works (Lines 12-16). Then we list out all of its attributes with their types (Lines 18-23) and methods with their parameters and return values (Lines 25-34)</div>
                        
                    </div>
                    <div className="subtitle">Python Class Documentation:</div>
                    <div className="explanation">Below is a list of what you need to do for a class documentation in Python:</div>
                    <ul>
                        <li>Give a brief description of what the class is and what it does</li>
                        <li>List out all attributes, their types, and a brief description of what they do</li>
                        <li>List out all methods with their paremeters and return values</li>
                    </ul>
                    <div className="subtitle">Comments:</div>
                    <div className="explanation">Comments should be added before every important section portion of the code so that everyone reading code knows what is going on. When there may be a part of the code like a variable that is not obvious to understand its functions, we can use a comment to give a better description.</div>
                </Overlay>
            </div>

            <div className="col">
                <button className="button-57" onClick={ () => setIsRecur(!isRecur)}><span className="doc">
                    <div className="text">Recursion</div>
                    <img src={recur} alt = "" className="documentation"></img>
                    </span>
                    <span>Recursion is the repeated use of the same function in order to simplify the code.<br></br><br></br><br></br> Click to learn more!</span>
                </button>
                <Overlay isOpen={isRecur} onClose={ ()=> setIsRecur(!isRecur)}>
                    <div className="header">Recursion:</div>
                    <div className="body">
                        <img src={two} alt = "" className="code_ex"></img>
                        <div className="explanation">Recursion is the process of calling the same function over and over until a desired answer is reached. We use recursion to mainly simplify code into small chunks instead of writing long iterative solutions. However, it is not always wise to use recursion as functions take up a lot of memory and there is usually maximum recursion depth in each programming language. An example of when to use recursion can be seen from the image on the left. In this example, you are a cashier and are trying to give 30 cents worth of change when you have quarters, dimes and nickels. Recursion allows us to find all the permutations with the given coins by going branch by branch and checking whether the total is equal to 30 cents. If our total goes over 30 cents, then the function will stop calling itself. </div>
                        
                    </div>
                    <div className="subtitle">Recursion Requirements:</div>
                    <div className="explanation">Below is a list of what you need to do for a recursive function:</div>
                    <ul>
                        <li>A repeatable task - a function that calls itself</li>
                        <li>A base case - the condition needed for your program to stop calling itself</li>
                        <li>Think whether an easy iterative solution exists, if it does then recursion might not be the best method</li>
                    </ul>
                    <div className="subtitle">Optimization</div>
                    <div className="explanation">Memoization is a method to optimize recursive programs where we cache known results. In our coin example, instead of finding all the permutations, we only have to focus on combinations using memoization which greatly reduces the time it takes for our program to finish. The key downside to memoization is that it only works in certain scenarios. If you were to have a more complex recursive algorithm, then memoization cannot be used as there might not be any data to cache.</div>
                </Overlay>
            </div>

            <div className="col">
                <button className="button-57" onClick={() => setIsClass(!isClass)}><span className="doc">
                    <div className="text">Classes & Objects</div>
                    <img src={c} alt = "" className="documentation"></img>
                    </span>
                    <span>An object is a component of your program and classes define the properties and functions of objects.<br></br><br></br> Click to learn more!</span>
                </button>
                <Overlay isOpen={isClass} onClose={() => setIsClass(!isClass)}>
                <div className="header">Classes & Objects:</div>
                    <div className="body">
                        <img src={three} alt = "" className="code_ex"></img>
                        <div className="explanation">Almost everything is an object, whether that is an integer, string, or class they can all be categorized under objects. Classes are like the blueprints to creating new objects. They will often have a a constructor which is what the program needs to do to initialize the object for the first time. In Python, this function is the __init__() function. The main reason we use classes is to organize code and to simplify code similar to using functions. We can create multiple objects using the same class that all have similar properties which reduces the need for hard coding objects.</div>
                    </div>
                    <div className="subtitle">Code Example:</div>
                    <div className="explanation">In the UML diagram above, we have a class called cities and it has some attributes of name, neighbours, and population. There are also many methods like changing the population of the city or getting the neighbours of the city. The reason we use a class is so that we can store all of a city's information inside one variable which makes it easy when we need to create hundreds of thousands of city objects. If we did not use classes, then we would have to create a seperate variable for each one of a cities properties. In the future, you will also see classes being interconnected with one another. When using classes and objects, programmers will generally refer to Object Oriented Programming (OOP) which is a programming model revolved around objects that is well-suited for large and complicated programs.</div>
                    <div className="subtitle">Class Requirements:</div>
                    <div className="explanation">Below is a list of what you should need to create a class</div>
                    <ul>
                        <li>Attributes - what properties does your object have?</li>
                        <li>Methods - what can you do with your object?</li>
                        <li>Purpose - why use a class?</li>
                    </ul>
                </Overlay>
            </div>

            <div className="col">
                <button className="button-57" onClick={() => setIsInherit(!isInherit)}><span className="doc">
                    <div className="text">Inheritance</div>
                    <img src={inheritance} alt = "" className="documentation"></img>
                    </span>
                    <span>Inheritance allows a child class to acquire all methods and properties from a parent class.<br></br><br></br><br></br> Click to learn more!</span>
                </button>
                <Overlay isOpen={isInherit} onClose={() => setIsInherit(!isInherit)}>
                <div className="header">Inheritance:</div>
                    <div className="body">
                        <img src={four} alt = "" className="code_ex"></img> 
                        <div className="explanation">Classes can use other classes and take their properties. There will usually be a parent and child class. The parent class is the class that is being inherited from while the child class can inherit all of the methods and attributes by using a super class which makes it easier to reuse code. You can build upon existing code with inheritance to create new features while still maintaining original features in the parent class. In a UML diagram, inheritance can be indicated through an arrow pointing from the child class to the parent class. </div>
                    </div>
                    <div className="subtitle">Code Example:</div>
                    <div className="explanation">We can have a parent class called government and we can define what are the key attributes found inside any level government. There are many levels of government in Canada: federal, provincial, municipal. Each one of them has a name and a population. This is when we can have a federal, provincial, and municipal class that all inherits the properties of the government class, so that we only have to write the code for the name and population once inside the government class. While these levels of governments have a lot of similarities, they also contain differences such as the services that they manage in their respective regions. With these differences, you can create methods and attributes that are unique to each level of government. The UML diagram above gives a brief summary of how the code might work.</div>
                </Overlay>
            </div>
            <div className="col">
                <button className="button-57" onClick={() => setIsRead(!isRead)}><span className="doc">
                    <div className="text">File Reading</div>
                    <img src={fread} alt = "" className="documentation"></img>
                    </span>
                    <span>Reading files allows you to take data from a database and transfer it onto your local platform for use.<br></br><br></br> Click to learn more!</span>
                </button>
                <Overlay isOpen={isRead} onClose={() => setIsRead(!isRead)}>
                <div className="header">File Reading:</div>
                    <div className="body">
                        <img src={five} alt = "" className="code_ex"></img>
                        <div className="explanation">Reading files is very important when it comes to the organization of code. You can store your data in a specific file while your program can be stored in a seperate file. When you have saved data and want to access that information, then you need to read the file to access the information. Text files, CSV files, JSON files, APIs and many more are files that you read information from for your program to process. Each one has their advantages and disadvantages. For example, a JSON file might be used over a txt file when storing configuration information as it can be more organized in hash maps. The configuration on this website itself uses a JSON file for the build settings on the react project. On the other hand, text files might be more beneficial compared to JSON if storage space is an issue. JSON files generally take up a lot more space than txt files even if they store the same amount of information. </div>
                    </div>
                    <div className="subtitle">Code Example:</div>
                    <div className="explanation">In the code displayed above, we will be reading the data from that JSON file. You will notice how the data is stored neatly into lists, so that we can access any part of it if we needed to. We can get the province name or we can get the names of the cities inside it which is very useful if we needed to manipulate any of the information using file reading. We also have informations about highways that connect the cities together with their highway names, distance, and speed limits. All of this information can be read through a program which can then find the shortest path between two cities. This code was taken from the Extended Data Structures assignment.</div>
                </Overlay>
            </div>
            <div className="col">
                <button className="button-57" onClick={() => setIsWrite(!isWrite)}><span className="doc">
                    <div className="text">File Writing</div>
                    <img src={fwrite} alt = "" className="documentation"></img>
                    </span>
                    <span>File writing allows you to save data in a secure and organized file for future usage.<br></br><br></br><br></br> Click to learn more!</span>
                </button>
                <Overlay isOpen={isWrite} onClose={() => setIsWrite(!isWrite)}>
                <div className="header">File Writing:</div>
                    <div className="body">
                        <img src={six} alt = "" className="code_ex"></img>
                        <div className="explanation">File writing is important whenever you want to enable a user to retain information for future use. It is also important when you do not want to directly print to the console so that you can save information. For example, when you want to save progress in any video game, you will need to write to a file so that the information is saved. Another example of when to write to a file is when you want to log data so that you can analyze what went wrong with the code or server. In the image on the left, there is an example of a log file where we are logging info when the programming is running at the specific time frame.</div>
                    </div>
                        <div className="subtitle">JSON Files: </div>
                        <div className="explanation">JSON files are a special type of file that you can write to or read from. They are used because they are stored like lists/hashmaps which makes it very convenient for programmers to access. They are commonly used when storing game data, configuration files, and API data because of how easy and simple they are to create compared to XML files or SQL files. </div>
                </Overlay>
            </div>


            <div className="col">
                <button className="button-57" onClick={() => setIsUML(!isUML)}><span className="doc">
                    <div className="text">UML Diagrams</div>
                    <img src={uml} alt = "" className="documentation"></img>
                    </span>
                    <span>UML diagrams are useful when planning out classes and objects to understand the connections between classes<br></br><br></br> Click to learn more!</span>
                </button>
                <Overlay isOpen={isUML} onClose={() => setIsUML(!isUML)}>
                <div className="header">UML Diagrams:</div>
                    <div className="body">
                        <img src={seven} alt = "" className="code_ex"></img>
                        <div className="explanation">UML class diagrams help programmers plan and create their program to understand which parts are interconnected with each other. Especially in team projects, UML diagrams help everyone visualize the end product, so that everyone is on the same page on how the program will function. Issues with the process can also be discussed before starting to program which can save a lot of time. UML diagrams are commonly used in the industry when designing new products because you never want to blindly start programming without considering the issues that may occur. </div>
                    </div>
                    <div className="subtitle">How to make UML class diagrams:</div>
                    <div className="explanation">To make UML class diagrams, you first begin by defining the name of your class followed by all of its attributes and methods. Then you can draw a diamond arrow to all the classes that use this class and indicate the number of uses for this class. You can also draw triangle arrows to the parent class that a class inherits its properties from. In the UML diagram above in the Extended Data Structures assignment, we have a federal, provincial, and municipal class that all inherits properties from the government class indicated by the triangle arrow. The federal class also uses the provincial class multiple times and the provincial class uses the municipal class multiple times because of the provinces and hundreds of cities in Canada.</div>
                </Overlay>
            </div>

            <div className="col">
                <button className="button-57" onClick={() => setIsSort(!isSort)}><span className="doc">
                    <div className="text">Sorting Algorithms</div>
                    <img src={sort} alt = "" className="documentation"></img>
                    </span>
                    <span>Sorting algorithms can sort a list by a property so that it is easier to work with the data<br></br><br></br><br></br> Click to learn more!</span>
                </button>
                <Overlay isOpen={isSort} onClose={() => setIsSort(!isSort)}>
                <div className="header">Sorting Algorithms:</div>
                    <div className="explanation">There are many different kinds of sorting algorithms that have different use cases and also different run speeds.</div>
                    <div className="subtitle">Insertion Sort:</div>
                    <div className="explanation">Insertion sort is an O(n<sup>2</sup>) worst-case scenario sorting algorithm based off of bubble sort. While it is somewhat of a slower algorithm, it is an algorithm that is easy to understand for beginners in how it works. It starts from the beginning of the list and compares two adjacent items to see which one is less and moves that item to the left. This process continues until all items are all in the proper order which means that the list is sorted.</div>
                    <div className="subtitle">Merge Sort:</div>
                    <div className="explanation">Merge sort is an O(n log n) algorithm for average and worst-case scenario making it reliable among different sizes of datasets. It begins by splitting the list into smaller and smaller lists until there is only one element in each smaller list. Then it begins sorting the values by merging the list back into its original form but sorted instead. Merge sort is a very optimized algorithm that does a very good job at sorting lists, no matter the size or complexity.</div>
                    <div className="subtitle">Timsort:</div>
                    <div className="explanation">Timsort is the built-in Python sorting algorithm that utilizes both insertion sort and merge sort and has a time complexity of O(n(log n)) worst-case scenario. This makes it one of the fastest sorting algorithms. </div>
                    <div className="subtitle">When to use each algorithm?</div>
                    <div className="explanation">Timsort would be the most ideal algorithm to use as it combines both merge and insertion sort to create a super fast algorithm to sort arrays. Insertion is a good algorithm to learn for beginners as it is relatively simple to comprehend and code. Finally, merge sort is better for intermediates who understand a lot about coding already and the concepts behind making partitions/splitting the list into smaller lists.</div>
                    <br></br>
                    <div className="explanation">To find more information about these algorithms, visit the Algorithms assignment where I give in depth explanations on the pros and cons of each algorithm.</div>
                </Overlay>
            </div>
            <div className="col">
                <button className="button-57" onClick={() => setIsSearch(!isSearch)}><span className="doc">
                    <div className="text">Searching Algorithms</div>
                    <img src={search} alt = "" className="documentation"></img>
                    </span>
                    <span>Searching algorithms allows users to find an object within an array in a short period of time<br></br><br></br><br></br> Click to learn more!</span>
                </button>   
                <Overlay isOpen={isSearch} onClose={() => setIsSearch(!isSearch)}>
                <div className="header">Searching Algorithms:</div>
                    <div className="explanation">When we want to find an item in a list, we have to use a searching algorithm in order to find it. Searching algorithms vary in time complexity and there are many to choose from.</div>
                    <div className="subtitle">Linear Search:</div>
                    <div className="explanation">This is the most straight forward type of search and uses a loop from the start to the end and checks whether we found the item or not. Once the item is found or not found, the algorithm is complete and will return the position of the desired item or -1 if it is not in the array with a time complexity of O(n). </div>
                    <div className="subtitle">Binary Search:</div>
                    <div className="explanation">This type of searching algorithm is a little bit harder to understand. You must use this algorithm on a sorted list. It begins by start at the middle index of a list and removes half of the list depending on if your desired value is lower or higher than the middle number. The algorithm continues to split the list in half until the desired value has been found giving it a time complexity of O(log n).</div>
                    <div className="subtitle">When to use each algorithm?</div>
                    <div className="explanation">While binary search has a faster runtime. The key difference is that it requires the array to be sorted which also requires time. No matter if a list is sorted or not, linear search will always have the same runtime. This would actually make linear search faster than sorting an array and then using binary search to find an element. To summarize, linear search should be used when the array is unsorted, while binary search should be used when the array is sorted.</div>
                    <br></br>
                    <div className="explanation">To find more information about these algorithms, visit the Algorithms assignment where I give in depth explanations on the pros and cons of each algorithm.</div>
                </Overlay>
            </div>
        </div>
    </div>
    )
}

export default Concepts