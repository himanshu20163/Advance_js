function myFunction(){
   const table = document.getElementById("tableData")
    table.innerHTML = ""
    const input = document.getElementById("input").value
    const tagsArray = []
    emojiList.map((ele) => {
            if (ele) {
                tagsArray.push(ele)
                table.innerHTML += `
                    <tr class="tablerow">
                        <td id="emojiIcon">${ele.emoji}</td>
                        <td id="emojiTags">${ele.aliases}</td>
                        <td id="emojiname">${ele.description}</td>
                    </tr>
                `
            }
            
        })
}
function searchEmoji() {
    const table = document.getElementById("tableData")
    table.innerHTML = ""
    const input = document.getElementById("input").value
    const tagsArray = []
    if(input == ""){
        table.innerHTML =`
                            <tr>
                            <td id="p">Please Enter Emoji Name Here!!!!!</td>
                            </tr>   
                        `  
    }
    else{
        emojiList.map((ele) => {
            if (ele.tags.includes(input)) {
                tagsArray.push(ele)
                table.innerHTML += `
                    <tr class="tablerow">
                        <td id="emojiIcon">${ele.emoji}</td>
                        <td id="emojiTags">${ele.aliases}</td>
                        <td id="emojiname">${ele.description}</td>
                    </tr>
                `
            }
            
        })
        
    }
    }
   

function searchEmojiKeyup() {
    const table = document.getElementById("tableData")
    table.innerHTML = ""
    const input = document.getElementById("input").value
    const tagsArray = []
    if(input == ""){
        table.innerHTML =`
                            <tr>
                            <td id="p">Please Enter Emoji Name Here!!!!!</td>
                            </tr>   
                        `  
    }
    else{
        emojiList.map((ele) => {
            ele.tags.map((element) => {
                if (element.startsWith(input)) {
                    tagsArray.push(ele)
                    table.innerHTML += `
                    <tr class="tablerow">
                        <td id="emojiIcon">${ele.emoji}</td>
                        <td id="emojiTags">${ele.aliases}</td>
                        <td id="emojiname">${ele.description}</td>
                    </tr>
                    
                `
                }
            })
        })
    }
    
    
}

