import { useContext } from 'react'
import '../styles/configUser.css'
import { DataContext } from '../context'
function ConfigUser() {
  const { getSize, getFontFamily } = useContext(DataContext)
  return (
    <div className="config-user">
      <div className="config-user__header">
        <h5>CONFIGURACIONES DE LECTORES</h5>
      </div>
      <div className="font-size">
        <div className="option option-small" onClick={() => getSize('14px')}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby=":rd:_fontSize14px"
          >
            <title id=":rd:_fontSize14px">14px</title>
            <path
              d="M12.41 19.107c.643 0 1-.33 1.25-1.17l.679-2.07h4.275l.688 2.07c.24.83.616 1.17 1.267 1.17.688 0 1.143-.41 1.143-1.053 0-.25-.063-.545-.188-.928l-3.07-8.802c-.384-1.143-.92-1.607-1.928-1.607-1.018 0-1.563.473-1.946 1.607l-3.071 8.801c-.152.456-.214.732-.214.973 0 .607.455 1.01 1.116 1.01Zm2.464-5.034 1.553-4.928h.116l1.545 4.928h-3.214ZM3.564 18.076c.611 0 .937-.312 1.167-1.117l.367-1.132h3.187l.361 1.132c.23.784.583 1.117 1.194 1.117.66 0 1.09-.388 1.09-.992 0-.243-.062-.521-.187-.91l-2.09-6.144c-.382-1.132-.91-1.576-1.91-1.576-.999 0-1.54.451-1.915 1.576L2.73 16.174c-.16.465-.222.729-.222.958 0 .556.43.944 1.055.944Zm2.007-3.908 1.076-3.59h.11l1.063 3.59H5.57Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="option option-normal" onClick={() => getSize('16px')}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby=":rd:_fontSize14px"
          >
            <title id=":rd:_fontSize14px">16px</title>
            <path
              d="M12.41 19.107c.643 0 1-.33 1.25-1.17l.679-2.07h4.275l.688 2.07c.24.83.616 1.17 1.267 1.17.688 0 1.143-.41 1.143-1.053 0-.25-.063-.545-.188-.928l-3.07-8.802c-.384-1.143-.92-1.607-1.928-1.607-1.018 0-1.563.473-1.946 1.607l-3.071 8.801c-.152.456-.214.732-.214.973 0 .607.455 1.01 1.116 1.01Zm2.464-5.034 1.553-4.928h.116l1.545 4.928h-3.214ZM3.564 18.076c.611 0 .937-.312 1.167-1.117l.367-1.132h3.187l.361 1.132c.23.784.583 1.117 1.194 1.117.66 0 1.09-.388 1.09-.992 0-.243-.062-.521-.187-.91l-2.09-6.144c-.382-1.132-.91-1.576-1.91-1.576-.999 0-1.54.451-1.915 1.576L2.73 16.174c-.16.465-.222.729-.222.958 0 .556.43.944 1.055.944Zm2.007-3.908 1.076-3.59h.11l1.063 3.59H5.57Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="option option-large" onClick={() => getSize('22px')}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby=":rd:_fontSize14px"
          >
            <title id=":rd:_fontSize14px">18px</title>
            <path
              d="M12.41 19.107c.643 0 1-.33 1.25-1.17l.679-2.07h4.275l.688 2.07c.24.83.616 1.17 1.267 1.17.688 0 1.143-.41 1.143-1.053 0-.25-.063-.545-.188-.928l-3.07-8.802c-.384-1.143-.92-1.607-1.928-1.607-1.018 0-1.563.473-1.946 1.607l-3.071 8.801c-.152.456-.214.732-.214.973 0 .607.455 1.01 1.116 1.01Zm2.464-5.034 1.553-4.928h.116l1.545 4.928h-3.214ZM3.564 18.076c.611 0 .937-.312 1.167-1.117l.367-1.132h3.187l.361 1.132c.23.784.583 1.117 1.194 1.117.66 0 1.09-.388 1.09-.992 0-.243-.062-.521-.187-.91l-2.09-6.144c-.382-1.132-.91-1.576-1.91-1.576-.999 0-1.54.451-1.915 1.576L2.73 16.174c-.16.465-.222.729-.222.958 0 .556.43.944 1.055.944Zm2.007-3.908 1.076-3.59h.11l1.063 3.59H5.57Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <div className="font-family">
        <div>
          <h6>FUENTES</h6>
        </div>
        <div className="fonts-options">
          <button onClick={() => getFontFamily('Roboto mono')}>
            Roboto Mono
          </button>
          <button onClick={() => getFontFamily('sistem-ui')}>
            Predeterminada
          </button>
          <button onClick={() => getFontFamily('Lato')}>Lato</button>
        </div>
      </div>
    </div>
  )
}

export default ConfigUser
