const textarea = document.getElementById('textarea')
const btnEncrypt = document.querySelector('.btn-encrypt')
const btnDecrypt = document.querySelector('.btn-decrypt')
const btnCopy = document.querySelector('.btn-copy')
const resultMessage = document.querySelector('.result__message-text p')
const emptyContentDiv = document.querySelector('.result__message-empty')
const resultContentDiv = document.querySelector('.result__message-text')

const encryptedArguments = ['ai', 'enter', 'imes', 'ober', 'ufat']
const decryptedArguments = ['a', 'e', 'i', 'o', 'u']

const showContent = () => {
  if (resultMessage.innerHTML === '') {
    emptyContentDiv.style.display = 'block'
    resultContentDiv.style.display = 'none'
  } else {
    emptyContentDiv.style.display = 'none'
    resultContentDiv.style.display = 'flex'
  }
}

const encryptor = (text, arg1, arg2) => {
  let newSentence = text
    .replaceAll(arg1[1], arg2[1])
    .replaceAll(arg1[2], arg2[2])
    .replaceAll(arg1[0], arg2[0])
    .replaceAll(arg1[3], arg2[3])
    .replaceAll(arg1[4], arg2[4])
  return newSentence
}

const messageToEncrypt = (e) => {
  e.preventDefault()
  const messageToChange = textarea.value.toLowerCase()
  const newMessage = encryptor(
    messageToChange,
    decryptedArguments,
    encryptedArguments
  )
  resultMessage.innerHTML = newMessage
  showContent()
}

const messageToDecrypt = (e) => {
  e.preventDefault()
  const messageToChange = textarea.value.toLowerCase()
  const newMessage = encryptor(
    messageToChange,
    encryptedArguments,
    decryptedArguments
  )
  resultMessage.innerHTML = newMessage
  showContent()
}

const copyTextAfterEncrypt = async () => {
  const text = resultMessage.innerHTML
  try {
    await navigator.clipboard.writeText(text)
    console.log('Content copied to clipboard')
    resultMessage.innerHTML = ''
    showContent()
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

btnEncrypt.addEventListener('click', messageToEncrypt)
btnDecrypt.addEventListener('click', messageToDecrypt)
btnCopy.addEventListener('click', copyTextAfterEncrypt)
