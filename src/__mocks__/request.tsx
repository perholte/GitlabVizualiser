export{}

const commits = [{
        title: "test",
        author_name: "Test Er",
        short_id: "testId",
        created_at: new Date(),
    },
    {
        title: "test2",
        author_name: "Test Ersen",
        short_id: "testId2",
        created_at: new Date(),
    } 
]

const branches = [
    {
        name: "test",
        merged: true,
        developers_can_push: false,
        developers_can_merge: false,
        web_url: "egerger",
        commit: {
            title: "test",
            short_id: "ergerge",
            created_at: new Date(),},
    }, {
        name: "test1",
        merged: true,
        developers_can_push: false,
        developers_can_merge: false,
        web_url: "egerger",
        commit: {
            title: "test1",
            short_id: "ergerge",
            created_at: new Date(),},
    }
    

]

const issues = [{
    id: 1,
	title: "test",
	description: "test",
	closed: false,
	created_at: new Date(),
	task_completion_status: { completed_count: 1, count: 1 }
    },
    {
        id: 2,
        title: "test2",
        description: "test2",
        closed: false,
        created_at: new Date(),
        task_completion_status: { completed_count: 1, count: 1 }
    }
]
