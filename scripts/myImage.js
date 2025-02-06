// Function to fetch data from my_URL and handle the response
getData(my_URL).then(aghyadOthman => {

    // Select the first <section> element in the document
    let mySection = document.querySelector("section:nth-of-type(1)");

    // Extract avatar URL and name from the fetched data
    let myAvatar = aghyadOthman.data.avatar;
    let myName = aghyadOthman.data.name;

    // Create an <img> element
    let myImg = document.createElement("img");

    // Set the src attribute of the <img> element to the fetched avatar URL
    myImg.src = myAvatar;

    // Set the alt attribute of the <img> element to the fetched name
    myImg.alt = myName;

    // Append the <img> element to the selected <section> in the document
    mySection.appendChild(myImg);

    // Log the created <img> element to the console
    console.log(myImg);
});















/**************/
/* SPIEKBRIEF */
/**************/

// const mySection = document.querySelector('section:nth-of-type(1)');

// getMyImage();

// function getMyImage() {
// 	getData(urlMe).then( data => {  
// 		const myData = data.data;
// 		let myName = myData.name;
// 		let myImgSrc = myData.avatar;

// 		if (!myImgSrc) {
// 			myImgSrc = "images/placeholder1.svg";
// 		}

// 		const myImg = document.createElement("img");

// 		myImg.src = myImgSrc;
// 		myImg.alt = myName;

// 		mySection.append(myImg);
// 	});	
// }