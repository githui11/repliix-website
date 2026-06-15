
export function getAllPostIds() {
    return posts.map(post => {
        return {
            params: {
                id: post.id
            }
        };
    });
}

export function getPostData(id) {
    return posts.find(post => post.id === id);
}
