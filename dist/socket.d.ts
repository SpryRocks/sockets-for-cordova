export = Socket;
declare function Socket(): void;
declare class Socket {
    _state: number;
    onData: any;
    onClose: any;
    onError: any;
    socketKey: string;
    open(host: any, port: any, success: any, error: any): void;
    write(data: any, success: any, error: any): void;
    shutdownWrite(success: any, error: any): void;
    close(success: any, error: any): void;
    get state(): number;
    _ensureState(requiredState: any, errorCallback: any): boolean;
    setOptions(options: any, success: any, error: any): void;
}
declare namespace Socket {
    namespace State {
        const CLOSED: number;
        const OPENING: number;
        const OPENED: number;
        const CLOSING: number;
    }
    namespace ErrorType {
        const GENERAL: number;
        const OPEN_TIMEOUT: number;
        const WRITE_TIMEOUT: number;
    }
    function dispatchEvent(event: any): void;
    function _copyToArray(array: any): any[];
}
