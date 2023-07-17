const url = ''
const fileFormDOM = document.querySelector('.file-form')
const imageInputDOM = document.querySelector('#image')
const urlDOM = document.querySelector('.url-text');
const containerDOM = document.querySelector('.container')
let imageValue;

console.log(urlDOM);


imageInputDOM.addEventListener('change', async (e) => {
  const imageFile = e.target.files[0];
  const formData = new FormData();
  formData.append('image', imageFile)
  try {
    const { data: { image: { src } } } = await axios.post(`${url}/uploads`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log(src);
    imageValue = src
    urlDOM.innerHTML = imageValue;
  } catch (error) {
    imageValue = null
    console.log(error);
  }
})

