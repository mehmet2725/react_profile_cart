// Alt componentler
function UserImage({ src, alt }) {
    return (
        <div className="userImage">
            <img src={src} alt={alt} />
        </div>
    );
}

function UserDetail({ title, children }) {
    return (
        <div>
            <span className="title">{title} : </span>
            {children}
        </div>
    );
}

function UserName({ firstName, lastName }) {
    return <div className="userName">{firstName} {lastName}</div>;
}

function UserAddress({ address }) {
    return (
        <UserDetail title="Adres">
            {address.address} - {address.city} / {address.state} / {address.country}
        </UserDetail>
    );
}

// Ana component
export default function ProfileCard({ userData }) {
    return (
        <>
            {userData.users.map((user) => (
                <div className="card" key={user.id}>
                    <UserImage 
                        src={user.image} 
                        alt={`${user.firstName} ${user.lastName}`} 
                    />
                    <div className="userInfo">
                        <UserName firstName={user.firstName} lastName={user.lastName} />
                        <UserDetail title="Yaş">{user.age}</UserDetail>
                        <UserDetail title="E-Posta">
                            <a href={`mailto:${user.email}`}>{user.email}</a>
                        </UserDetail>
                        <UserDetail title="Telefon">
                            <a href={`tel:${user.phone}`}>{user.phone}</a>
                        </UserDetail>
                        <UserDetail title="Doğum Tarihi">{user.birthDate}</UserDetail>
                        <UserAddress address={user.address} />
                    </div>
                </div>
            ))}
        </>
    );
}