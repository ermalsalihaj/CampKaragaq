import { Button } from "antd";
import PageTitle from "../../../components/page-title";
import { getDateTimeFormat } from "../../../helpers/date-time-formats";
import usersGlobalStore, { UsersStoreType } from "../../../store/users-store";

function ProfilePage() {
    const { currentUser }: UsersStoreType = usersGlobalStore() as UsersStoreType;

    if (!currentUser) return null;

    const renderUserProperty = (label: string, value: any) => {
        return (
            <div className="flex flex-col p-4 border border-gray-200 rounded-lg shadow-sm">
                <span className="text-gray-500 text-sm">{label}</span>
                <span className="text-gray-800 font-semibold mt-1">{value}</span>
            </div>
        )
    }

    return (
        <div className="p-5">
            <PageTitle title="Profili" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
                {renderUserProperty('ID e Përdoruesit', currentUser?._id)}
                {renderUserProperty('Emri', currentUser?.name)}
                {renderUserProperty('Email', currentUser?.email)}
                {renderUserProperty('Anëtarësuar më', getDateTimeFormat(currentUser.createdAt!))}
                {renderUserProperty('Statusi', currentUser?.isActive ? 'Aktiv' : 'Inaktiv')}
                {renderUserProperty('Roli', currentUser?.isAdmin ? 'Admin' : 'Përdorues')}
            </div>

        </div>
    )
}

export default ProfilePage;
