import './styles.scss';

export function Modal(props: any) {

    return (
        <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
}