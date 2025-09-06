import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { themes } from 'prism-react-renderer';

interface LiveCodeBlockProps {
  code: string;
  scope?: Record<string, any>;
  noInline?: boolean;
}

export const LiveCodeBlock: React.FC<LiveCodeBlockProps> = ({
  code,
  scope = {},
  noInline = false,
}) => {
  return (
    <div className="live-code-block">
      <LiveProvider
        code={code}
        scope={scope}
        noInline={noInline}
        theme={themes.github}
      >
        <div className="live-preview">
          <LivePreview />
        </div>
        <div className="live-editor">
          <LiveEditor />
        </div>
        <LiveError />
      </LiveProvider>
    </div>
  );
};

export default LiveCodeBlock;
