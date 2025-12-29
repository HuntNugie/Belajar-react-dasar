import UseAuth from "../hooks/UseAuth";

export default function Dashboard() {
    const {user} = UseAuth();
    return (
        <>
            <h3>Selamat Datang, {user.profile.nama} 👋</h3>
            <p className="mt-3">Kamu berhasil login ke dashboard admin.</p>
        </>
    );
}
