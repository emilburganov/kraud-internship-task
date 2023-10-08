const ListItem = ({item}) => {
    return (
        <div className="list__item">
            {item.id}. {item.title}
        </div>
    );
};

export default ListItem;