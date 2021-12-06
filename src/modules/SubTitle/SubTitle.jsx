import { useEffect } from "react";
import { useForm } from "../../hook/useForm";
import {getDateRange} from "../../utils/Utils";
import {useMovieStore} from "../../store/store";
import "./css/subtitle.css";
const SubTitle = () => {
    const [inputs, handleChange] = useForm({
        initialdate: "",
        finaldate: ""
    });

   const findMovieByDateRange= useMovieStore((state)=>state.findMovieByDateRange);
   const dataDateRange= useMovieStore((state)=>state.dataDateRange);

    useEffect(() => {
        const { initialdate, finaldate } = inputs;
        if(initialdate.trim()!=="" && finaldate.trim()!==""){
             let _rangeDate=getDateRange(initialdate,finaldate);
             console.log(_rangeDate);
             findMovieByDateRange(_rangeDate);
             console.log(dataDateRange);
        }else{
            findMovieByDateRange([]);
        }
    }, [inputs]);

    return <>
        <div className="container-subtitle">
            <div className="container-date">
                <div className="input-group mb-3">
                    <label className='text-white fw-bold px-2 lb-date'>Fecha inicial</label>
                    <input type="date" className="form-control" placeholder="Fecha inicial" name='initialdate' onChange={(e) => handleChange(e)} />
                </div>
            </div>
            <div className="container-date">
                <div className="input-group mb-3">
                    <label className='text-white fw-bold px-2 lb-date'>Fecha final</label>
                    <input type="date" className="form-control" placeholder="Fecha final" name='finaldate' onChange={(e) => handleChange(e)} />
                </div>
            </div>
        </div>
    </>
}

export default SubTitle;