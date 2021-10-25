const linkSocialMedia = {
  github: 'aryanevilhena',
  linkedin: 'aryane-vilhena',
  facebook: 'aryanevilhena',
  instagram: 'aryane_vilhena',
  twitter: 'aryanevilhena'
}

changeSocialMediaLinks()

getGitHubProfileInfos()

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    if (li.getAttribute('class') === 'linkedin') {
      li.children[0].href = `https://${social}.com/in/${linkSocialMedia[social]}`
    } else
      li.children[0].href = `https://${social}.com/${linkSocialMedia[social]}`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linkSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
