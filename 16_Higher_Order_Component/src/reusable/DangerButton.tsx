import { WithButton } from '../components/withButton/WithButton';

function Button({
    style,
    handleClick,
    name,
}: {
    style?: React.CSSProperties;
    handleClick?: (e: React.MouseEvent, param: any) => void;
    name?: string;
}) {
    return (
        <button
            style={style}
            onClick={(event) =>
                handleClick && handleClick(event, { msg: `${name} clicked` })
            }>
            Button
        </button>
    );
}

export default WithButton(Button, 'danger');
