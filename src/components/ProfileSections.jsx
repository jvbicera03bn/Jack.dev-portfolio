function ProfileSections({ name, children,  }) {
    
    return (
        <div className={`flex flex-col bg-spot-profile-pannel mx-4 py-5 px-4 rounded-lg shadow-spot-def`}>
            <h1 className="font-semibold text-xl pb-3">{name}</h1>
            <div>{children}</div>
        </div>
    );
}

export default ProfileSections;
