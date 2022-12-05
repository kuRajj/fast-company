import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentPrpoerty,
    onItemSelect,
    selectedItem
}) => {
    return (
        <ul className="list-group">
            {Array.isArray(items)
                ? items.map((item) => (
                      <li
                          key={item._id}
                          className={
                              "list-group-item" +
                              (JSON.stringify(item) ===
                              JSON.stringify(selectedItem)
                                  ? " active"
                                  : "")
                          }
                          onClick={() => onItemSelect(item)}
                          role="button"
                      >
                          {item.name}
                      </li>
                  ))
                : Object.keys(items).map((item) => (
                      <li
                          key={items[item][valueProperty]}
                          className={
                              "list-group-item" +
                              (items[item] === selectedItem ? " active" : "")
                          }
                          onClick={() => onItemSelect(items[item])}
                          role="button"
                      >
                          {items[item][contentPrpoerty]}
                      </li>
                  ))}
        </ul>
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentPrpoerty: "name"
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentPrpoerty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;
