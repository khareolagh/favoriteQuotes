export class SettingsService{
    private altBg = false;

    setBg(isAlt:boolean){
        this.altBg=isAlt;
    }

    isAltBg(){
        return this.altBg;
    }
}