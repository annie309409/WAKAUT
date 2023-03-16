import Layout from './layout';

export default function getLayout(fnName,{title,description}){
    fnName.getLayout = (page)=>(
        <Layout meta={{title,description}}>
            {page}
        </Layout>
    );
}

