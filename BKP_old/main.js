const linksSocialMidias = {
  github = "D13GO91",
  youtube = "UCMXWUqOfyyTwmYxX2OUQe1A",
  facebook = "nãoTenho",
  instagram = "d13go91",
  twitter = "naoTenho"
} 

function changeSocialMidiasLinks(){

  for (let li of socialLinks.children) {

    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMidias[social]}`
  }
}

changeSocialMidiasLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMidias.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userPhoto.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGitHubProfileInfos()

