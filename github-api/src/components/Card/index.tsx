import './styles.css'

type Props = {
    avatar:string
    perfil: string;
    seguidores: string;
    localidade:string;
    nome:string;
}

const Card = ( {avatar, perfil, seguidores, localidade, nome} : Props)=>{
    return(
        
        <div className="result-container">
            
            <img src={avatar}alt="Avatar" className="container-foto" />
            
            <div className="container-info">
                <p>Informações</p>
                <div className="title">
                    <div className="info"> Perfil: {<a href={perfil} className='link'>{perfil}</a>}</div>
                    <div className="info"> Seguidores: <span>{seguidores}</span></div>
                    <div className="info"> Localidade: <span>{localidade}</span></div>
                    <div className="info"> Nome: <span>{nome}</span></div>
                </div>

            </div>
        </div>
    );
    
}
export default Card;