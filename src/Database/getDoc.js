import { db } from '../firebase'

export default function getDoc(name,doc_name) {

    return new Promise((resolve, reject) => {

        db.collection(name).doc(doc_name)
            .get()
            .then(snapshot => {
                if(snapshot.exists){
                    resolve(snapshot.data());
                }
                else{
                    resolve("Empty")
                }
            })
            .catch(reason => {
                reject(reason);
            });
    });
}

export function getSubDoc(name,doc_name,sub_name,sub_doc) {

    return new Promise((resolve, reject) => {

        db.collection(name).doc(doc_name).collection(sub_name).doc(sub_doc)
            .get()
            .then(snapshot => {
                if(snapshot.exists){
                    resolve(snapshot.data());
                }
                else{
                    resolve("Empty")
                }
            })
            .catch(reason => {
                reject(reason);
            });
    });
}