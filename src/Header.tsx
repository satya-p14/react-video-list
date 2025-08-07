interface header {
    title: string;
}

const Header = ({ title }: header) => {
    return (
        <div>
            {title}
        </div>
    );
};

export default Header;