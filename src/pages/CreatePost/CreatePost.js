import styles from  "./CreatePost.module.css"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"
import { useInsertDocument } from "../../hooks/useInsertDocuments"

import React from 'react'

const CreatePost = () => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  const { insertDocument, response } = useInsertDocument("posts")
  const {user} = useAuthValue() 

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError("")
    // validate image URL

    //  criar array de tags
    
    //  checar todos os valores
    
    insertDocument({ 
      title,
      image,
      body,
      uid: user.uid,
      createBy: user.displayName
    })

    // redirect to homepage
    
  }
  
  return (
    <div className={styles.create_post}>
      <h2>Criar post</h2>
      <p>Escreva sobre o que quiser e compartilher ose conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input type="text" name="title" required
          placeholder="Pense num bom título..."
          onChange={(e)=>setTitle(e.target.value)} value={title}></input>
        </label>
        <label>
          <span>URL da imagem:</span>
          <input type="text" name="image" required
          placeholder="Insira a URL da imagem:"
          onChange={(e)=>setImage(e.target.value)} value={image}></input>
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea type="text" name="body" required
          placeholder="Insira o conteúdo do post:"
          onChange={(e)=>setBody(e.target.value)} value={body}></textarea>
        </label>
        <label>
          <span>Imagem:</span>
          <input type="text" name="tags" required
          placeholder="Insira as tags:"
          onChange={(e)=>setTags(e.target.value)} value={tags}></input>
        </label>
        {!response.loading && <button className="btn">Criar post!</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde.. .
          </button>
        )}
        {(response.error || formError) && (
          <p className="error">{response.error || formError}</p>
        )}
      </form>
    </div>
  )
}

export default CreatePost