
    let followers;
    let hitesh;
    const requestUrl ="https://api.github.com/users/hiteshchoudhary"
    const xhr = new XMLHttpRequest();
    xhr.open('GET',requestUrl)
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState);
        if (xhr.readyState===4 && xhr.status===200) {
            const daman = JSON.parse(this.responseText)
            
            document.querySelector("#profile_pic").src = daman.avatar_url;

            document.querySelector(".name").innerHTML = `" ${daman.login} "  Profile Card`

            document.querySelector('#followers').innerHTML = `Followers: ${daman.followers}`;
            console.log(daman);
        }
        };
    xhr.send();