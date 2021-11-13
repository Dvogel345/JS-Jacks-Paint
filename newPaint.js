// add function iterating through color imgs and looking for mouseover 
function configListeners() {
    var images = document.getElementsByTagName('img');    

     for (var i = 0; i < images.length; i++) {        
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)        
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)        
    } 
}

// add function to change opacity to onn
function addOpacity(event) {
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
    }    
    getProductInfo(event.target.id);     
}

// removing the opacity as it turns off
function removeOpacity(event) {
     if (this.classList.contains('dim')){
        this.classList.remove('dim');
    }

    let element = document.getElementById('name');
        element.textContent = '';
        
    let color = document.getElementById('color');
        color.textContent = ''; 

    event.preventDefault();    
}
// adding a link function to link the image to the product info being displayed
function changeImage(elementId) {
    let image = document.getElementById('imgDisplay');
    image.src = elementId.src;
}

// switch function to change between colors and display info that we inputted
function getProductInfo(partNumber) {
    let price;
    let colorName;  
    
    switch (partNumber) {
        case 'pn1':           
            price = '$19.99'
            colorName = 'Lime Green'
            updatePrice(colorName, price)           
            break;           
        case 'pn2':
            price = '$12.99'
            colorName = 'Medium Brown' 
            updatePrice(colorName, price)     
            break;            
        case 'pn3':
            price = '$11.99'
            colorName = 'Royal Blue'   
            updatePrice(colorName, price)   
            break;   
        case 'pn4':
            price = '$14.99'
            colorName = 'Bright Red'            
            updatePrice(colorName, price)   
            break;   
        case 'pn5':
            price = '$9.99'
            colorName = 'Solid White' 
            updatePrice(colorName, price)              
            break;   
        case 'pn6':
            price = '$15.99'
            colorName = 'Solid Black'   
            updatePrice(colorName, price)            
            break;   
        case 'pn7':
            price = '$8.99'
            colorName = 'Medium Blue'       
            updatePrice(colorName, price)        
            break;   
        case 'pn8':
            price = '$16.99'
            colorName = 'Light Purple'      
            updatePrice(colorName, price)         
            break;   
        case 'pn9':
            price = '$17.99'
            colorName = 'Bright Yellow'                       
            updatePrice(colorName, price)   
            break;   
          default:              
    }
// funciton to update the price and name of the text inputted
    function updatePrice(colorName, price)
    {       
        let name = document.getElementById('name');
        name.textContent = price;
        
        let color = document.getElementById('color');
        color.textContent = colorName;
    }

    
}
