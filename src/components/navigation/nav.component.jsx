import './navigation.styles.scss';

const Navigation = () => {
    return (
        <nav class="container topnav">
            <ul>
                <li>
                    <a href="/" class="no-pad">
                        <img src="/images/logo.svg" alt="Mohd Javed" />
                    </a>
                </li>
            </ul>
            <ul class="flex-all-center">
                <li><a class="active" href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;