const files = [
    'document1.txt', 'presentation1.pdf', 'song1.mp3', 'installer1.exe', 'archive1.rar',
    'report1.docx', 'image1.jpg', 'graphic1.png', 'animation1.gif', 'compressed1.zip',
    'document2.txt', 'presentation2.pdf', 'song2.mp3', 'installer2.exe', 'archive2.rar',
    'report2.docx', 'image2.jpg', 'graphic2.png', 'animation2.gif', 'compressed2.zip',
    null, 'presentation3.pdf', '', 'installer3.exe', 'archive3.rar',
    'report3.docx', 'image3.jpg', 'graphic3.png', 'animation3.gif', 'compressed3.zip',
    'document4.txt', 'presentation4.pdf', 'song4.mp3', 'installer4.exe', 'archive4.rar',
    'report4.docx', 'image4.jpg', 'graphic4.png', 'animation4.gif', 'compressed4.zip',
    'document5.txt', 'presentation5.pdf', 'song5.mp3', 'installer5.exe', 'archive5.rar',
    'report5.docx', 'image5.jpg', 'graphic5.png', 'animation5.gif', 'compressed5.zip',
    'document6.txt', 'presentation6.pdf', 'song6.mp3', 'installer6.exe', 'archive6.rar',
    'report6.docx', 'image6.jpg', null, 'animation6.gif', 'compressed6.zip',
    'document7.txt', 'presentation7.pdf', 'song7.mp3', 'installer7.exe', 'archive7.rar',
    'report7.docx', 'image7.jpg', 'graphic7.png', 'animation7.gif', 'compressed7.zip',
    'document8.txt', 'presentation8.pdf', 'song8.mp3', 'installer8.exe', 'archive8.rar',
    'report8.docx', 'image8.jpg', '', 'animation8.gif', 'compressed8.zip',
    'document9.txt', 'presentation9.pdf', 'song9.mp3', 'installer9.exe', 'archive9.rar',
    'report9.docx', 'image9.jpg', '', 'animation9.gif', 'compressed9.zip',
    'document10.txt', 'presentation10.pdf', 'song10.mp3', 'installer10.exe', 'archive10.rar',
    'report10.docx', 'image10.jpg', 'graphic10.png', 'animation10.gif', 'compressed10.zip',
  ];
  

//   console.log(files)

//   categoryze all Files

  const categoryzedFiles = (files) =>{
    return files.reduce((acc , file) =>
    {

        const type = file.split('.').pop();

        if(!acc[type]){
            acc[type] = [];
        }

        acc[type].push(file);
        return acc;

    }, {})
  }

//   know we will display all files

const displayFolders = (folders) =>{

    const folderContainer = document.getElementById("folders-container")

    folderContainer.innerHTML = '';

    Object.keys(folders).forEach( (type) =>{

        const folder = document.createElement("div")
        folder.className = 'folder';

        folder.textContent = type.toUpperCase();

        folder.addEventListener('click' , () => displayFiles(type));

        folderContainer.appendChild(folder);

    })
}


let  currentFiles = [];

const displayFiles = (type) =>{

    const filesCotainer = document.getElementById("files-container");
    
    filesCotainer.innerHTML = '';

    const filesList = categoryzedFiles(files)[type];
    currentFiles = filesList;

    filesList.forEach((file) =>{

        const fileElement = document.createElement("div");
        fileElement.className = 'file';
        fileElement.textContent = 'file';

        filesCotainer.appendChild(fileElement);
       
    });

    addSearchAdndSortFeatures(type);
};



// know we will search all file

const addSearchAdndSortFeatures = (type) =>{
    const filesCotainer = document.getElementById('files-container');

    const existringElement =  filesCotainer.querySelectorAll('button , input');
    existringElement.forEach(elem  => elem.remove());

    const searchInput = document.createElement('input' , () =>{
        const searchTerm = searchInput.value.toLowerCase();

        const filterFileds = currentFiles.filter(file => 
            file.toLowerCase().includes(searchTerm));

        displayFilesList(filterFileds); 


    });


    filesCotainer.appendChild(searchInput);

    const sortAscButton = document.createElement('button')

    sortAscButton.textContent - 'Sort Ascending';

    sortAscButton.addEventListener('click' , () => sortFiles('asc'))

    filesCotainer.appendChild(sortAscButton);

    const sortDescButton = document.createElement('button')
    sortAscButton.textContent = 'Sort Descending';

    sortDescButton.addEventListener('click' , ()=> sortFiles('desc'));

    filesCotainer.appendChild(sortAscButton)




}


const sortFiles = (order) => {
    const sortFiles = [...currentFiles].sort((a ,b) =>{
        if(order === 'asc'){
            return a.localeCompare(b)
        }else{
            localeCompare(a);
        }
    });

    displayFilesList(sortFiles)
}

const displayFilesList = (files) => {
    const filesCotainer = document.getElementById("files-container");

    const fileElement = filesCotainer.querySelectorAll('.file');

    fileElement.forEach(el => el.remove())

    files.forEach((file) =>{
        const fileElement = document.createElement('div')

        fileElement.className = 'file';

        filesCotainer.appendChild(fileElement);
    })
}



document.addEventListener('DOMContentLoaded' , () =>{
    const categoryzedFiles = categoryzedFiles(files);

    displayFolders(categoryzedFiles);
});
