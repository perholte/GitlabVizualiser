import { Gitgraph, templateExtend, TemplateName } from '@gitgraph/react';
import { Branch, getBranches } from '../../api';

const BranchTree = () => {
	const options = {
		author: 'employee1',
		template: templateExtend(TemplateName.Metro, {
			commit: {
				message: {
					displayAuthor: false,
					displayHash: false,
				},
			},
		}),
	};

  return <>
    <Gitgraph options={options}>
      {(gitgraph) => {
        getBranches().then((res) => {
          const branches: Array<Branch> = []
          let master:any
          const mergedBranches:any = []
          
          for (let i = 0; i < res.length; i++) {
            if (res[i].name === "main" || res[i].name === "master") {
              master = gitgraph.branch(res[i].name).commit("");
            } else {
                branches.push(res[i]);
            }
          }

          branches.forEach(element => { 
            if (element.merged) {
              mergedBranches.push(master.branch(element).commit(element.commit.title))
            } else {
              master.branch(element).commit(element.commit.title)
            }
          }) 
          mergedBranches.forEach((element: any) => {
            master.merge(element)
          })
        })
    }
  }
    </Gitgraph>
  </>;
};
export default BranchTree;
