import { onMounted, ref, watch } from "vue";

export function useFetch(url){

    const data=ref(null)
    const error=ref(null)
    const loading=ref(false)//Estado de la carga. si es false es que todavia no termina de cargas

    const fetchData= async()=>{

        try {
            const res= await fetch(url.value);

            loading.value=true
            error.value=null

            if(!res.ok){
                throw new Error('Error a la petició: '+res.status)
            }

            data.value=await res.json();

        } catch (err) {
            error.value=err.message
        }finally{

            loading.value=false
        }
    }

    //Disparador que esta que no cargue el componente no pasa los datos, no llama la función
    onMounted(fetchData);//Ejecuta la función

    watch(url,fetchData)//Necesario para cada vez que se cambie el paramtro se redenrise la página
    return {data, error,loading, fetchData}
}