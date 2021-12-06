
import { useRef } from "react";
import { Modal, ModalManager, Effect } from "react-dynamic-modal";
import { styleModal } from "../../utils/Config";
import { convertLocalDate } from "../../utils/Utils";
import "./css/ModalShere.css";
const ModalShare = (props) => {
    const { onRequestClose, item, handlerSendMailer } = props;
    const { title, info } = item;
    const { image_url, release_date, plot, genres } = info;
    const inputEmail = useRef(null);
    const alertMessage = useRef(null);
    const template=useRef(null);

    return <>
        <Modal onRequestClose={onRequestClose} effect={styleModal}>
            <div className="panel panel-default">
                <div className="panel-heading d-flex justify-content-between align-items-center">
                    <div>
                        <span className="lead font-weight-bold"><span className='title-share'>Compartir: </span>{`${title}`}</span>
                    </div>
                    <div>
                        <span className="close_modal_icon" onClick={ModalManager.close}>
                            X
                        </span>
                    </div>
                </div>
                <div className="panel-body">
                    <div className="mb-3">
                        <label htmlFor="emailFormControl" className="form-label">Correo electrónico: *</label>
                        <input type="email" ref={inputEmail} className="form-control" id="emailFormControl" placeholder="cine@gmail.com" autoFocus autoComplete='off' />
                        <small className='text-danger' ref={alertMessage}></small>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Cuerpo del mensaje</label>
                        <div className="card mb-3" ref={template}>
                            <div className="row g-0">
                                <div className="col-md-4 modal-share-container-image">
                                    <img src={image_url} alt="Sin imagen" className="img-body-modal-share" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                        <p className="card-text">{plot}</p>
                                        <ul>
                                            {
                                                genres.map((genre, index) => <li key={index}>{genre}</li>)
                                            }
                                        </ul>
                                        <p className="card-text"><small className="text-muted">Fecha de estreno: {convertLocalDate(release_date)}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel-footer d-flex justify-content-end align-items-center">
                    <small className="text-danger pr-5 saveMessage"></small>
                    <button className='btn btn-primary' onClick={(e) => handlerSendMailer(e, item, inputEmail, alertMessage,template,ModalManager)}>
                        Enviar correo
                    </button>
                    <button className='btn btn-secondary ml-1' onClick={ModalManager.close}>
                        Cancelar
                    </button>
                </div>
            </div>

        </Modal>
    </>
}

export default ModalShare;