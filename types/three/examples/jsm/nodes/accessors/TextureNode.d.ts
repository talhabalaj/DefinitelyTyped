import { Texture } from '../../../../src/Three.js';
import UniformNode from '../core/UniformNode.js';
import Node from '../core/Node.js';
import { NodeRepresentation, ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class TextureNode extends UniformNode<Texture> {
    isTextureNode: true;

    uvNode: ShaderNodeObject<Node> | null;
    levelNode: ShaderNodeObject<Node> | null;

    constructor(value: Texture, uvNode?: ShaderNodeObject<Node>, levelNode?: ShaderNodeObject<Node> | null);

    getDefaultUV(): Node;

    clone(): this;
}

export const texture: (
    value: Texture,
    uvNode?: NodeRepresentation,
    levelNode?: NodeRepresentation,
) => ShaderNodeObject<TextureNode>;
export const sampler: (aTexture: Texture | TextureNode) => ShaderNodeObject<Node>;

declare module '../shadernode/ShaderNode.js' {
    interface NodeElements {
        texture: typeof texture;
    }
}
