declare class Navigation {
 name: string;
 constructor(config: Object);
 init(): void;
 go():void;
 back():void;
 isHas():void;
 historyPulishEventer():void;
 historyListenerEventer():void;
 initListenerEventer():void;
}
export default Navigation