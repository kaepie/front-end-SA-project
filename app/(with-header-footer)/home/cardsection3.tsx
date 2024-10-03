import ParagraphAnimation from "@/app/components/ParagraphAnimation";
import TextTitleAnimation from "@/app/components/TextTitleAnimation";

interface CardSection2Props {
    description: string;
}

export default function CardSection3({description} : CardSection2Props){
    return (
        <div className="w-full h-auto text-center border-2 border-secondaryBackground py-16 px-10 space-y-4 bg-white">
                <ParagraphAnimation className="text-primaryText text-lg" content={`${description}`}/>
        </div>
    );
}