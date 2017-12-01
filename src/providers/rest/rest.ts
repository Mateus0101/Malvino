import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RestProvider {
    //malvinoservice.hopto.org
    public apiUrl = 'http://192.168.1.12:8080/Malvino/rest/JogadoresService';
    public apiUrlRanking = 'http://192.168.1.12:8080/Malvino/rest/ScoreGame';

    constructor(public http: Http) { }


    getJogadores(): Observable<string[]> {
        return this.http.get(this.apiUrl + '/Jogadores')
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    getRanking(): Observable<string[]> {
        return this.http.get(this.apiUrlRanking + '/RankingGlobal')
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    recuperarSenha(email) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/recuperarSenha', email)
                .subscribe((result: any) => {
                    resolve(JSON.stringify(result));
                },
                (error) => {
                    reject(JSON.stringify(error));
                });
        });
    }

    logarJogador(data: any) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/login', data)
                .subscribe((result: any) => {
                    resolve(result.json());
                },
                (error) => {
                    reject(error.json());
                });
        });
    }
    addJogador(data) {

        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/Salvar', data)
                .subscribe((result: any) => {
                    resolve(result.json())
                },
                (error) => {
                    reject(error.json())
                })
        });
    }


    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    getJogador(data) {
        return new Promise((resolve, reject) => {
            var urlTemp = this.apiUrl + '/Jogadores/' + data;
            this.http.get(urlTemp).subscribe((result: any) => {
                resolve(result.json())
            },
                (error) => {
                    reject(error.json())
                })
        });

    }

    editarJogador(data) {
        return new Promise((resolve, reject) => {
            this.http.put(this.apiUrl + '/Atualizar', data)
                .subscribe((result: any) => {
                    resolve(result.json())
                },
                (error) => {
                    reject(error.json())
                })
        });
    }
}
