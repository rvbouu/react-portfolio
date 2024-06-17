import './Loading.css';

export default function Loading(){
  return(
    <section className='loadingpage'>
      <img src='/loading_circle.png' alt='dotted circle' className='loading_circle' />
      <p className='loading_title'>L O A D I N G . . . </p>
    </section>
  )
}