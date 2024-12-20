
import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    doctor:{
        backgroundColor: COLORS. white,
        flex: 1,
        padding: 8,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: COLORS.gray4,
        marginTop:3,
        marginBottom: 3,
        borderRadius: 10,
        
    },
    name:{
        fontSize: FONT_SIZE.md,
        color: COLORS.gray1,
        marginTop: 5
    },
    specialty:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
    },
    icon:{
        with: 50,
        heigth: 50,
        marginRight: 8
    }
}