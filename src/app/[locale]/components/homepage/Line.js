export default function Line({ way }) {
    return (
        <hr
            className={`${way} from-accent via-[#55edd6] to-colors-evest-500 p-0 m-0 border-none w-full h-1.5`}
        ></hr>
    );
}
