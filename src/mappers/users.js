import { User } from '../models/users';
export const userMapper = data => {
  const reduce = (root, item) => {
    const hasParentID = item.hasOwnProperty('parentID');
    const user = new User({
      id: item.ID,
      parentID: hasParentID ? item.parentID : null,
      name: item.Name,
      children: []
    });
    root[user.id] = user;
    if (!hasParentID) {
      root[0].children.push(user);
    } else {
      root[user.parentID] = root[user.parentID] || {};
      root[user.parentID].children = root[user.parentID].children || [];
      root[user.parentID].children.push(user);
    }
    return root;
  };

 /*

  Ikinci bir yol

const children = {};
const parents = [];
 for (let i in data) {
    const item = data[i],
      parentID = item.parentID;

    if (parentID) {
      children[parentID] = children[parentID] || [];
      children[parentID].push(
        new User({
          id: item.ID,
          parentID: item.parentID,
          name: item.Name,
          children: []
        })
      );
    } else {
      parents.push(
        new User({
          id: item.ID,
          parentID: item.parentID,
          name: item.Name,
          children: []
        })
      );
    }
  }
  const getChild = function(parent) {
    if (children[parent.id]) {
      parent.children = children[parent.id];
      for (let i in parent.children) {
        getChild(parent.children[i], children);
      }
    }
  };
  for (let i in parents) {
    getChild(parents[i]);
  }
  return parents

  */
  return data.reduce(reduce, {})[0].children;
};
