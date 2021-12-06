

module.exports.getTemplate = function(item){
    const { title, info } = item;
    const { release_date, plot, genres } = info;
    return `<html>
    <head>
         <style>
             .card {
                 position: relative;
                 display: flex;
                 flex-direction: column;
                 min-width: 0;
                 word-wrap: break-word;
                 background-color: #fff;
                 background-clip: border-box;
                 border: 1px solid rgba(0,0,0,.125);
                 border-radius: .25rem;
             }

             .row {
                 --bs-gutter-x: 1.5rem;
                 --bs-gutter-y: 0;
                 display: flex;
                 flex-wrap: wrap;
                 margin-top: calc(-1 * var(--bs-gutter-y));
                 margin-right: calc(-.5 * var(--bs-gutter-x));
                 margin-left: calc(-.5 * var(--bs-gutter-x));
             }


             .row > * {
                 flex-shrink: 0;
                 width: 100%;
                 max-width: 100%;
                 padding-right: calc(var(--bs-gutter-x) * .5);
                 padding-left: calc(var(--bs-gutter-x) * .5);
                 margin-top: var(--bs-gutter-y);
             }

             .modal-share-container-image {
                 display: flex;
                 justify-content: center;
                 padding: 11px 0px;
                     padding-right: 0px;
                     padding-left: 0px;
             }

             .img-body-modal-share {
                 width: 179px;
             }

         
             .card-body {
                 flex: 1 1 auto;
                 padding: 1rem 1rem;
             }

             .card-title {
                 margin-bottom: .5rem;
             }
             .h5, h5 {
                 font-size: 1.25rem;
             }
         </style>
    </head>
    <body>
         <div class="card mb-3">
         <div class="row g-0">
                 <div class="col-md-4 modal-share-container-image">
                     <img  src="cid:img" alt="Sin imagen" class="img-body-modal-share">
                 </div>
                 <div class="col-md-8">
                         <div class="card-body" style="width: 20rem!important;">
                             <h5 class="card-title">${title}</h5>
                             <p class="card-text">${plot}</p>
                             <ul>
                             ${genres.map((genre) =>{
                                 return `<li>${genre}</li>`;
                             })}
                         </ul>
                         <p className="card-text"><small className="text-muted">Fecha de estreno: ${(new Date(release_date)).toLocaleString('es-US')}</small></p>
                         </div>
                 </div>
             </div>
         </div>
    </body>
 </html>`;
}