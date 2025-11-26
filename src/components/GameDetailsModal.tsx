import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { ExternalLink } from "lucide-react";

interface GameStore {
  name: string;
  url: string;
}

interface GameDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  longDescription: string;
  screenshots: string[];
  trailerUrl?: string;
  stores: GameStore[];
}

const GameDetailsModal = ({
  open,
  onOpenChange,
  title,
  description,
  longDescription,
  screenshots,
  trailerUrl,
  stores,
}: GameDetailsModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Description */}
          <div>
            <p className="text-foreground/80 leading-relaxed">
              {longDescription}
            </p>
          </div>

          {/* Trailer */}
          {trailerUrl && (
            <div>
              <h3 className="text-lg font-bold mb-3">Trailer</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={trailerUrl}
                  title={`${title} Trailer`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          )}

          {/* Screenshots */}
          {screenshots.length > 0 && (
            <div>
              <h3 className="text-lg font-bold mb-3">Screenshots</h3>
              <div className="grid grid-cols-2 gap-4">
                {screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="aspect-video rounded-lg overflow-hidden"
                  >
                    <img
                      src={screenshot}
                      alt={`${title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Store Links */}
          {stores.length > 0 && (
            <div>
              <h3 className="text-lg font-bold mb-3">
                {stores.length === 1 ? "Available on" : "Available on"}
              </h3>
              <div className="flex flex-wrap gap-3">
                {stores.map((store, index) => (
                  <Button
                    key={index}
                    asChild
                    variant="default"
                    className="gap-2"
                  >
                    <a
                      href={store.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {store.name}
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GameDetailsModal;