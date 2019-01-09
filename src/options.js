import hljs from 'highlight.js'

let toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  [{ 'color': [] }, { 'background': [] }],
  [{ 'align': [] }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'font': [] }],
  ['blockquote', 'code-block'],
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],
  [{ 'indent': '-1' }, { 'indent': '+1' }],
  ['link', 'image', 'video'],
  [{ 'direction': 'rtl' }],
  ['clean']
]

hljs.configure({
  languages: ['javascript', 'ruby', 'python', 'vue', 'java', 'html', 'css']
})

export default {
  theme: 'snow',
  boundary: document.body,
  modules: {
    toolbar: toolbarOptions,
    history: {
      delay: 2000,
      maxStack: 500,
      userOnly: true
    }
  },
  placeholder: '在此输入...',
  readOnly: false,
  syntax: true
}
